# Línea Gas — Demo Web Comercial

Demo web interactivo, profesional y responsive para **Línea Gas**, desarrollado en base a la especificación y cotización de Oqentra Group.

---

## 🚀 Inicio Rápido en Desarrollo

Para ejecutar el proyecto localmente:

```bash
# Instalar dependencias (si aún no se ha ejecutado)
npm install

# Iniciar servidor de desarrollo local
npm run dev
```

El servidor estará disponible en `http://localhost:4321`.

### Para compilar y verificar producción:
```bash
npm run build
npm run preview
```

---

## 🛠️ Stack Tecnológico
- **Framework:** [Astro 5](https://astro.build/) (generación estática ultra rápida, HTML semántico y óptimo para SEO).
- **Tipado:** [TypeScript](https://www.typescriptlang.org/) con configuración estricta.
- **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/) con tokens de diseño corporativo:
  - `--color-brand-navy`: `#11185C` (Azul corporativo principal)
  - `--color-brand-orange`: `#F5660A` (Acentos y detalles)
  - `--color-brand-orange-dark`: `#C84D08` (Botones de acción con contraste AA)
  - `--color-brand-yellow`: `#F4A20E` (Degradados cálidos de la llama)

---

## 🌟 Características Implementadas

1. **Selector Interactivo de Marcas con Balones de 10 kg (Regular y Premium):**
   - Selector por pestañas accesible que permite al cliente cambiar entre marcas disponibles (Solgas, Limagas, Costagas, Llamagas, Zeta Gas).
   - Cada marca despliega automáticamente sus dos presentaciones:
     - **10 kg Regular** (válvula convencional).
     - **10 kg Premium** (válvula de acople rápido / mayor eficiencia).
   - El botón de WhatsApp prepara un mensaje personalizado para la marca y presentación seleccionada.
2. **Placeholders Limpios ("Imagen no encontrada / pendiente"):**
   - En lugar de dibujos provisionales o marcas ajenas, se integró un componente de placeholder con icono accesible indicando la ruta exacta de la imagen pendiente (`/images/products/...`).
3. **Manejo Seguro del Modo Demo:**
   - Si no hay número de WhatsApp o teléfono en `src/data/site.ts`, los botones abren un diálogo accesible (`<dialog>`) explicando que el canal oficial está en proceso de validación, mostrando el mensaje que se enviaría.
   - El formulario de contacto valida todos los campos en el cliente e informa con claridad que en modo demo no se envían correos reales al exterior.
4. **Header Sticky & Menú Móvil Accesible:**
   - Navegación responsive con apertura suave, soporte de tecla Escape y scroll a anclas (`#inicio`, `#nosotros`, `#productos`, `#contacto`).
5. **Secciones Completas:**
   - **Hero:** Propuesta de valor, CTAs y composición limpia.
   - **Beneficios:** 3 tarjetas de ventajas claras.
   - **Quiénes Somos:** Historia, misión, visión y valores éticos.
   - **Banda Intermedia:** Conversión directa a asesoría.
   - **Contacto:** Datos organizados, mapa placeholder y formulario validado.
   - **Footer:** Identidad corporativa, enlaces y aviso legal.
   - **Página de Privacidad:** `/privacidad`.

---

## 📝 Configuración y Datos Pendientes

Toda la información del negocio se administra desde un solo archivo:
👉 `src/data/site.ts`

### Datos a reemplazar cuando Línea Gas los proporcione:
1. **WhatsApp oficial:** Configurar `site.contact.whatsappNumber` (ejemplo: `"51987654321"`).
2. **Teléfono de llamadas:** Configurar `site.contact.phoneNumber`.
3. **Dirección física y mapa:** Configurar `site.contact.address` y la URL de Google Maps en `site.contact.mapEmbedUrl`.
4. **Horarios de despacho:** Configurar `site.contact.businessHours`.
5. **Fotografías de balones:** Integradas en `public/images/products/` (`costaGas.png`, `solGas.png`, `sipanGas.png`).
6. **Logotipos oficiales:** Integrados en `public/images/logoClaro.png` (para cabecera con fondo claro) y `public/images/logoOscuro.png` (para pie de página con fondo azul oscuro).
