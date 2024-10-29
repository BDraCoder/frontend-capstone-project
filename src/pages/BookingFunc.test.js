import * as FakeAPI from '../utilities/FakeAPI';
import { isInThePast, formatDate } from '../utilities/time';

const initializeTimes = () => {
    return FakeAPI.getTimeSlots(new Date());
}
const updateTimes = (state, action) => {
    const pickDate = new Date(action.date)
    if (isInThePast(pickDate)) return [];
    console.log("pick date",pickDate);
    return FakeAPI.getTimeSlots(pickDate);
}

let result = [];
describe('function initializeTimes()',()=>{
    beforeEach(()=>{
        result = initializeTimes();
    })
    test('return an array', () => {
        expect(Array.isArray(result)).toBe(true);
    })
    test('Each element of the array matches 24h time format', () => {
        expect(result[0]).toMatch(/^\d{2}:\d{2}$/);
    })
})
describe('function updateTimes()',()=>{
    beforeEach(()=>{
        result = updateTimes(null, {date:formatDate(new Date())});
    })
    test('return an array', () => {
        expect(Array.isArray(result)).toBe(true);
    })
    test('array has length greater than 0', () => {
        expect(result.length).toBeGreaterThan(0);
    })
    test('Each element of the array matches 24h time format', () => {
        expect(result[0]).toMatch(/^\d{2}:\d{2}$/);
    })
    test('Should return empty when choose a date in the past', () => {
        const result = updateTimes(null, {date:formatDate(new Date('2023-01-01'))});
        expect(result.length).toBe(0);
    })
})