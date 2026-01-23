# Checklist para verificar Tailwind CSS

## ✅ Verificaciones realizadas:

1. **layout.tsx** - ✅ Importa `./globals.css` correctamente
2. **globals.css** - ✅ Tiene `@import "tailwindcss"` al inicio
3. **postcss.config.mjs** - ✅ Plugin de Tailwind configurado
4. **package.json** - ✅ Tailwind v4 instalado

## 🔧 Soluciones a probar:

### 1. Limpiar cache y reiniciar:
```bash
rm -rf .next
npm run dev
```

### 2. Verificar que el servidor esté corriendo:
```bash
# Detener cualquier proceso en puerto 3000/3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# Reiniciar
npm run dev
```

### 3. Verificar en el navegador:
- Abrir DevTools (F12)
- Ir a la pestaña "Network"
- Recargar la página
- Buscar el archivo CSS generado
- Verificar que las clases de Tailwind estén presentes

### 4. Test rápido en un componente:
Agregar temporalmente una clase obvia como `bg-red-500` para verificar que Tailwind está funcionando.
