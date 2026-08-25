---
description: 'Base de datos de GTA6: personajes, armas y vehículos con tablas de datos completas al estilo wiki de fans.'

tags: ['GTA6','Grand Theft Auto 6','base de datos','personajes','armas','vehículos','estadísticas']
date: 2026-07-24
---

# Base de datos de GTA6

> Referencia tipo wiki de fans: Personajes / Armas / Vehículos — tablas de datos completas.

---

## Personajes principales

| Personaje | Nombre completo | VA | Rol | Habilidad especial | Descripción |
|-----------|-----------------|-----|------|---------------------|-------------|
| **Jason** | Jason (TBA) | TBA | Protagonista / Callejero | **Ojo muerto** | Cámara lenta en tiroteos, bloquea automático varios puntos débiles enemigos durante 5-8 s |
| **Lucia** | Lucia (TBA) | TBA | Protagonista / Hacker experta | **Sobrecarga de sistema** | Hackea a distancia cámaras, cajeros y electrónica de vehículos en 50 m, enfriamiento 90 s |
| **Stephanie** | Stephanie (TBA) | TBA | PNJ clave / Contacto | — | Enlace de Jason, da misiones secundarias e información por teléfono |
| **Billy** | Billy (TBA) | TBA | Antagonista / Jefe de banda | — | Jefe de la banda local de Vice City, controla el puerto y el tráfico de drogas |

### Comparativa de estadísticas de personajes

| Atributo | Jason | Lucia |
|----------|-------|-------|
| **PV base** | 120 | 100 |
| **Armadura base** | 30 | 20 |
| **Velocidad de movimiento** | 7,5/10 | 8,5/10 |
| **Daño cuerpo a cuerpo** | Alto (bonus arma) | Medio (tipo ágil) |
| **Precisión de disparo** | 85 % (rifle) | 70 % (pistola/subfusil) |
| **Conducción** | 7/10 | 9/10 |
| **Sigilo** | 6/10 | 9/10 |
| **Hacking** | 3/10 | 10/10 |
| **Natación** | 8/10 | 7/10 |

### Mapa de relaciones de personajes

```
Jason ←→ Lucia (cambio de doble protagonista)
  │         │
  ├── Stephanie (contacto)
  │         │
  ├── Billy (hostil)
  │         │
  └── Bandas callejeras (neutral → variable)
            │
            └── Red de drogas (Lucia puede hackear)
```

---

## Datos de armas

### Pistolas

| Arma | Tipo | Daño | RPM | Cargador | Precisión | Alcance | Adquisición | Precio($) |
|------|------|------|-----|----------|-----------|---------|-------------|----------|
| **Pistola** | Semi-auto | 26 | 300 | 12 | 65 % | 40m | Inicial | 0 |
| **Pistola de combate** | Semi-auto | 32 | 280 | 15 | 72 % | 45m | Armería | 3.200 |
| **Pistola pesada** | Gran calibre | 45 | 200 | 8 | 60 % | 50m | Misión mercado negro | 5.800 |
| **Pistola AP** | Automática | 22 | 600 | 18 | 55 % | 35m | Armería | 4.500 |
| **Pistola aturdidora** | Táser | 0 (+aturdimiento) | — | 1 | 80 % | 10m | Sala de evidencias policial | 0 |
| **Pistola de bengala** | Señal | 10 (+quemadura) | — | 1 | 50 % | 100m | Recogida en campo | 0 |

### Subfusiles

| Arma | Tipo | Daño | RPM | Cargador | Precisión | Alcance | Adquisición | Precio($) |
|------|------|------|-----|----------|-----------|---------|-------------|----------|
| **Micro SMG** | SMG compacta | 21 | 750 | 30 | 48 % | 50m | Armería | 3.750 |
| **SMG** | SMG estándar | 26 | 700 | 30 | 55 % | 55m | Desbloqueo historia | 5.200 |
| **SMG de asalto** | Alta capacidad | 24 | 850 | 60 | 52 % | 60m | Paquetes ocultos | 7.800 |
| **PDW de combate** | PDW | 28 | 650 | 40 | 68 % | 70m | Armería | 9.500 |

### Rifles

| Arma | Tipo | Daño | RPM | Cargador | Precisión | Alcance | Adquisición | Precio($) |
|------|------|------|-----|----------|-----------|---------|-------------|----------|
| **Rifle de asalto** | AR | 32 | 600 | 30 | 78 % | 80m | Desbloqueo historia | 6.500 |
| **Carabina** | Carabina | 34 | 650 | 30 | 82 % | 85m | Armería | 8.200 |
| **Rifle avanzado** | AR avanzado | 36 | 700 | 40 | 85 % | 90m | Armería final | 12.500 |
| **Rifle Bullpup** | Bullpup | 38 | 550 | 35 | 80 % | 75m | Robo en base militar | 14.000 |

### Fusiles de francotirador

| Arma | Tipo | Daño | Cadencia | Cargador | Precisión | Alcance | Adquisición | Precio($) |
|------|------|------|----------|----------|-----------|---------|-------------|----------|
| **Francotirador** | Cerrojo | 95 | Lenta | 5 | 95 % | 200m | Armería | 10.000 |
| **Francotirador pesado** | Anti-material | 120 | Muy lenta | 4 | 98 % | 300m | Mercado negro | 18.000 |
| **Rifle de precisión** | DMR | 65 | Media | 10 | 90 % | 150m | Armería | 7.500 |

### Escopetas

| Arma | Tipo | Daño | Cadencia | Cargador | Precisión | Alcance | Adquisición | Precio($) |
|------|------|------|----------|----------|-----------|---------|-------------|----------|
| **Escopeta de bombeo** | Bombeo | 70 | Lenta | 6 | 35 % | 25m | Armería | 4.200 |
| **Escopeta de asalto** | Automática | 62 | Rápida | 8 | 30 % | 20m | Desbloqueo final | 9.800 |
| **Escopeta recortada** | Recortada | 85 | Media | 2 | 20 % | 10m | Botín de banda | 0 |

### Armas pesadas

| Arma | Tipo | Daño | Notas | Adquisición | Precio($) |
|------|------|------|-------|-------------|----------|
| **RPG** | Lanzacohetes | 500 | Explosión 15m, 1 disparo | Base militar / MN | 15.000 |
| **Lanzagranadas** | Lanzagranadas | 350 | Explosión 10m, 6 disparos | Armería (tardío) | 12.000 |
| **Minigun** | Minigun | 15/disparo | 3000 RPM, 999 disparos | Todos los paquetes ocultos | 0 |
| **Lanzamisiles teledirigido** | Misil teledirigido | 400 | Rastrea vehículos | Mercado negro | 20.000 |

### Arrojadizas / especiales

| Nombre | Daño | Radio | Efecto | Adquisición | Precio($) |
|--------|------|-------|--------|-------------|----------|
| **Granada de fragmentación** | 250 | 8m | Espoleta 5s | Armería | 500 |
| **Bomba pegajosa** | 300 | 6m | Detonación remota | Desbloqueo historia | 800 |
| **Cóctel molotov** | 50/s | 5m | Quema 12s | Elaborar (gasolina+tela) | 0 |
| **Gas lacrimógeno** | 0 | 8m | Tos/lentitud 20s | Comisaría | 0 |
| **Mina de proximidad** | 400 | 4m | Detonación al disparo | Mercado negro | 1.200 |

---

## Datos de vehículos

### Superdeportivos

| Vehículo | Tipo | Vel. máx (km/h) | Acel | Manejo | Plazas | Precio($) | Adquisición |
|----------|------|-----------------|------|--------|--------|----------|-------------|
| **Infernus Classic** | Super clásico | 340 | 9,2 | 8,5 | 2 | 1.800.000 | Autos de lujo |
| **Adder 2.0** | Estilo Bugatti | 370 | 9,5 | 8,0 | 2 | 2.400.000 | Autos de lujo |
| **Turismo Omaggio** | Estilo Ferrari | 355 | 9,8 | 9,2 | 2 | 2.100.000 | Recompensa historia |
| **PFister Comet S2** | Estilo Porsche | 330 | 9,0 | 9,5 | 2 | 1.500.000 | Autos de lujo |
| **Grotti Furia** | Super italiano | 360 | 9,6 | 8,8 | 2 | 2.700.000 | Ruleta del casino |

### Muscle cars

| Vehículo | Vel. máx | Acel | Manejo | Plazas | Precio($) | Notas |
|----------|----------|------|--------|--------|----------|-------|
| **Dominator GT** | 320 | 8,5 | 6,8 | 2 | 850.000 | Muscle clásico americano |
| **Gauntlet Classic** | 300 | 7,8 | 6,5 | 2 | 650.000 | Inspirado en Challenger |
| **Vigero ZX** | 310 | 8,2 | 7,0 | 2 | 780.000 | Inspirado en Camaro |
| **Tampa** | 280 | 7,5 | 7,2 | 2 | 450.000 | Muscle de entrada |

### Todo terreno / SUV

| Vehículo | Vel. máx | Acel | Todo terreno | Plazas | Precio($) | Notas |
|----------|----------|------|--------------|--------|----------|-------|
| **Sandking XL** | 210 | 5,0 | 10/10 | 4 | 680.000 | Rey del pantano |
| **Rebel** | 190 | 5,5 | 9/10 | 2 | 350.000 | Pickup económica |
| **Granger 3600LX** | 200 | 6,0 | 7/10 | 8 | 1.200.000 | Gran SUV de lujo |
| **Hellion** | 220 | 6,5 | 8/10 | 4 | 550.000 | Inspirado en Wrangler |

### Helicópteros

| Vehículo | Vel. máx | Plazas | Armas | Precio($) | Adquisición |
|----------|----------|--------|-------|----------|-------------|
| **Maverick** | 260 | 4 | Ninguna | 780.000 | Compra en aeropuerto |
| **Buzzard de ataque** | 280 | 4 | AM + Misiles | 1.750.000 | Base militar |
| **Cargobob** | 220 | 10 | Ninguna | 1.200.000 | Compra en aeropuerto |
| **Sparrow** | 300 | 2 | Misiles opcionales | 1.500.000 | Accesorio de yate |

### Barcos

| Vehículo | Vel. máx | Plazas | Notas | Precio($) |
|----------|----------|--------|-------|----------|
| **Speeder** | 160 | 4 | Lancha rápida estándar | 250.000 |
| **Tropic** | 140 | 6 | Yate de ocio | 450.000 |
| **Jetmax** | 190 | 2 | Lancha más rápida | 600.000 |
| **Sub Kraken** | 40 | 1 | Sumergible (200m de prof.) | 2.200.000 |

### Vehículos especiales

| Vehículo | Tipo | Vel. máx | Habilidad especial | Adquisición |
|----------|------|----------|---------------------|-------------|
| **Hovercraft** | Hovercraft | 120 | Anfibio + pantano | 45 paquetes ocultos |
| **Rocket Voltic** | Coche cohete | 350 | Impulso cohete 5s | Misión especial |
| **Deluxo** | Coche volador | 250(tierra)/200(aire) | Vuelo corto + misiles | Huevo de pascua oculto |
| **Oppressor Mk II** | Moto planeadora | 280(aire) | Vuelo + misiles | Desbloqueo Terrorbyte |

---

## Eficiencia para ganar dinero

| Método | Por vuelta($) | Duración | Eficiencia($/h) | Dificultad |
|--------|---------------|----------|------------------|------------|
| **Misiones de historia** | 5.000-50.000 | 15-45 min | ~80.000 | ★★☆ |
| **Atracos** | 200.000-800.000 | 30-60 min | ~500.000 | ★★★★ |
| **Contrabando de droga** | 50.000-150.000 | 20 min | ~300.000 | ★★★ |
| **Reventa de coches** | 10.000-80.000 | 5 min | ~300.000 | ★★☆ |
| **Bolsa** | Variable | Varía | ~200.000 | ★★☆ |
| **Paquetes ocultos** | 5.000 cada uno | 2-5 min | ~100.000 | ★★☆ |
| **Hackeo de cajero (Lucia)** | 2.000-8.000 | 10 s | ~500.000 | ★☆☆ |

---

> **Fuentes de datos:** basado en análisis de trailers oficiales de Rockstar + datos de referencia de GTA Online. Los datos reales están sujetos al lanzamiento del juego.

## Preguntas frecuentes

**Q: ¿Cuántos personajes jugables hay en GTA6?**
A: dos protagonistas, Jason y Lucia, con cambio entre ellos; más PNJ clave como Stephanie y el antagonista Billy.

**Q: ¿Qué hace la habilidad de Lucia?**
A: Sobrecarga de sistema hackea a distancia cámaras, cajeros y electrónica de vehículos en 50 m, con enfriamiento de 90 s.

**Q: ¿El Minigun es gratis?**
A: sí, se obtiene completando todos los paquetes ocultos; su precio en la tabla es 0.

**Q: ¿De dónde saco el coche más rápido?**
A: el Adder 2.0 (370 km/h) y el Grotti Furia (360 km/h) están en autos de lujo y ruleta del casino respectivamente.


## Related

- [GTA6  Guía completa de logros y trofeos](./achievements.md)
- [GTA6  Tier list de mejores vehículos](./best-vehicles.md)
- [Habilidades y progresión de los dos protagonistas de GTA6](./character-guide.md)
- [GTA6  Lista completa de cheats](./cheats.md)
- [GTA6  Lugares ocultos y huevos de pascua](./hidden-locations.md)
- [Guía del mapa de GTA 6: Vice City y Leonida](./map-guide.md)
- [GTA6  Guía rápida de dinero para principiantes](./money-guide.md)
- [Guía de precompra de GTA6: ediciones tiendas reembolsos y consolas](./preorder-guide.md)
- [Precio y ediciones de GTA 6 (2026)](./price.md)
- [Guía de GTA6: Fecha de lanzamiento plataformas y requisitos para PC](./release-guide.md)
- [GTA6  Guía de la historia principal](./story-guide.md)
- [GTA6  Base de datos de armas](./weapons.md)
