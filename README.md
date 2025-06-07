## Paso 1: Manejar los casos más pequeños
- Los números primos, por definición, son mayores que 1.

## Paso 2: El caso especial del 2
- El 2 es el único número primo que es par.

## Paso 3: Descartar la mayoría de los números pares
- Si el número es par (y ya sabemos que no es 2), no es primo.
- El operador % (módulo) da el resto de una división.
- Si el resto de dividir por 2 es 0, es par.

## Paso 4 y 5: La búsqueda inteligente de divisores
- Iteramos solo sobre números impares hasta la raíz cuadrada del número.
- Si encontramos un divisor, el número no es primo.
- Math.sqrt(numero) calcula la raíz cuadrada.
- Encontramos un divisor, no es primo.
    
## Paso 6: Si no se encontró ningún divisor
- Si el bucle termina sin encontrar divisores, el número es primo.