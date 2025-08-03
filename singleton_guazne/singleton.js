class AppConfig {
  constructor() {
    if (AppConfig.instance) {
      return AppConfig.instance;
    }

    // Cargar desde localStorage si ya existe una configuración previa
    const saved = localStorage.getItem('appConfig');

    this.config = saved
      ? JSON.parse(saved)
      : {
          modo: 'producción',
          version: '1.0.0',
          autor: 'kener',
          usuarioActual: null
        };

    AppConfig.instance = this;
    return this;
  }

  // Obtener todo el objeto de configuración
  obtenerConfiguracion() {
    return this.config;
  }

  // Actualizar partes de la configuración
  actualizarConfiguracion(nuevaConfig) {
    this.config = { ...this.config, ...nuevaConfig };
    localStorage.setItem('appConfig', JSON.stringify(this.config));
  }

  // Establecer usuario actual
  establecerUsuario(nombre) {
    this.config.usuarioActual = nombre;
    this.actualizarConfiguracion({}); // Guardar en localStorage
  }

  // Obtener usuario actual
  obtenerUsuario() {
    return this.config.usuarioActual;
  }

  // Cerrar sesión
  cerrarSesion() {
    this.establecerUsuario(null);
  }
}

export default AppConfig;
