import { getSundayOfCurrentWeek } from '../../src/util/DateUtil'

describe('testing getSundayOfCurrentWeek', () => {
  test('input Thursday, January 26, 2023 should return Sunday, January 22, 2023', () => {
    const sunday = new Date(2023, 0, 22, 0, 0, 0, 0)
    const thursday = new Date(2023, 0, 26, 0, 0, 0, 0)
    expect(getSundayOfCurrentWeek(thursday)).toMatchObject(sunday)
  })
})
