import ava1 from '../images/1.jpg';
import ava2 from '../images/2.jpg';
import ava3 from '../images/3.jpg';
import ava4 from '../images/4.jpg';

const testimonialData = [
    {name: 'Jorg', ava: ava1, rate: '4', desc:'Good one!'},
    {name: 'Alex', ava: ava2, rate: '5', desc:'Nice one!'},
    {name: 'Maya', ava: ava3, rate: '5', desc:'Good service!'},
    {name: 'Jean', ava: ava4, rate: '5', desc:'Awsome view!'},
]

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fakeGetDataProcess = async (delay, data) => {
    return new Promise(resolve => 
        setTimeout(()=>resolve(data), delay)
    )
}

export const getTimeSlots = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submit = function(data) {
    return true;
}

export const getTestimonial = async () => {
    return await fakeGetDataProcess(2000, testimonialData);
}