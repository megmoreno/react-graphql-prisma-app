import {
  getSundayOfCurrentWeek,
  getSaturdayOfCurrentWeek,
} from '../../src/util/DateUtil'

describe('testing getSundayOfCurrentWeek', () => {
  test('input Thursday, January 26, 2023 should return Sunday, January 22, 2023', () => {
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    const thursday = new Date(2023, 0, 26, 0, 0, 0, 0)
    expect(getSundayOfCurrentWeek(thursday)).toMatchObject(sunday)
  })
})

describe('testing getSundayOfCurrentWeek', () => {
  test('input Saturday, January 28, 2023 should return Sunday, January 22, 2023', () => {
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    const saturday = new Date(2023, 0, 28, 0, 0, 0, 0)
    expect(getSundayOfCurrentWeek(saturday)).toMatchObject(sunday)
  })
})

describe('testing getSundayOfCurrentWeek', () => {
  test('input Sunday, January 22, 2023 should return Sunday, January 22, 2023', () => {
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    expect(getSundayOfCurrentWeek(sunday)).toMatchObject(sunday)
  })
})

describe('testing getSundayOfCurrentWeek', () => {
  test('input Monday, January 23, 2023 should return Sunday, January 22, 2023', () => {
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    const monday = new Date(2023, 0, 23, 0, 0, 0, 0)
    expect(getSundayOfCurrentWeek(monday)).toMatchObject(sunday)
  })
})

describe('testing getSaturdayOfCurrentWeek', () => {
  test('input Thursday, January 26, 2023 should return Saturday, January 28, 2023', () => {
    const saturday = new Date(2023, 0, 28, 0, 0, 0, 0)
    const thursday = new Date(2023, 0, 26, 0, 0, 0, 0)
    expect(getSaturdayOfCurrentWeek(thursday)).toMatchObject(saturday)
  })
})

describe('testing getSaturdayOfCurrentWeek', () => {
  test('input Sunday, January 22, 2023 should return Saturday, January 28, 2023', () => {
    const saturday = new Date(2023, 0, 28, 0, 0, 0, 0)
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    expect(getSaturdayOfCurrentWeek(sunday)).toMatchObject(saturday)
  })
})

describe('testing getSaturdayOfCurrentWeek', () => {
  test('input Friday, January 27, 2023 should return Saturday, January 28, 2023', () => {
    const saturday = new Date(2023, 0, 28, 0, 0, 0, 0)
    const friday = new Date(2023, 0, 23, 0, 0, 0, 0)
    expect(getSaturdayOfCurrentWeek(friday)).toMatchObject(saturday)
  })
})

describe('testing getSaturdayOfCurrentWeek', () => {
  test('input Saturday, January 28, 2023 should return Saturday, January 28, 2023', () => {
    const saturday = new Date(2023, 0, 28, 0, 0, 0, 0)
    expect(getSaturdayOfCurrentWeek(saturday)).toMatchObject(saturday)
  })
})
