const LEVELS = {
  0: 'Низкий',
  1: 'Средний',
  2: 'Высокий',
  3: 'Критичный'
}

const objectReplacement = {
  criticality_level: LEVELS
}
const sfcReplacement = {
  criticality_level: LEVELS,
  destabilization_level: LEVELS
}
const attackReplacement = {
  impact_nature: {
    0: 'Активный',
    1: 'Пассивный'
  },
  impact_level: LEVELS,
  stage: {
    0: 'Вектор',
    1: 'Точка входа',
    2: 'Нарушение функций безопасности'
  }
}
const vulnerabilityReplacement = {
  danger_level: LEVELS,
  vul_class: {
    0: 'Кода',
    1: 'Архитектуры',
    2: 'Многофакторный',
    3: 'Организационный',
    4: 'Конфигурации'
  }
}
const riskReplacement = {
  criticality_level: LEVELS
}

export {
  objectReplacement,
  sfcReplacement,
  attackReplacement,
  vulnerabilityReplacement,
  riskReplacement
}
