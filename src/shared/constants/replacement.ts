const LEVELS = {
  0: 'Низкий',
  1: 'Средний',
  2: 'Высокий',
  3: 'Критичный'
}

const objectReplacement = {
  criticality_level: LEVELS,
  domain: LEVELS
}
const sfcReplacement = {
  criticality_level: LEVELS,
  destabilization_level: LEVELS
}
const attackReplacement = {
  purpose: {
    0: 'Конфиденциальность',
    1: 'Целостность',
    2: 'Доступность'
  },
  impact_nature: {
    0: 'Активный',
    1: 'Пассивный'
  },
  tools: {
    0: 'Свободное ПО',
    1: 'Коммерческое ПО',
    2: 'Вспомогательные средства',
    3: 'Специальное ПО',
    4: 'Самостоятельно разработанное ПО'
  },
  consequences: {
    0: 'Влияние на человека',
    1: 'Влияние на информацию',
    2: 'Влияние на окружающую среду'
  },
  impact_level: LEVELS,
  intruder_possibility: LEVELS,
  potential_level: LEVELS,
  type: {
    0: 'Внешний',
    1: 'Внутренний'
  }
}
const vulnerabilityReplacement = {
  danger_degree: LEVELS,
  type: {
    0: 'Политики безопасности',
    1: 'Эксплуатационная',
    2: 'Технологическая'
  },
  grade: {
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
