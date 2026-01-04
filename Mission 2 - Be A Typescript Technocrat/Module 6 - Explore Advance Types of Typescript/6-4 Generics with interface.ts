// ! developer main format
interface Developer<T, X = null> {  //!X set to null as default value, for those not having bike object. So they dont need two arguments
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X; //! Making it optional, so every developer doesnt have to have bike attribute
}



// ! Setting up these for cleaner code. TO put in genereic place of two developer
type PoorDevWatch = {
    heartBeat: number;
    steps: number;
    AI: boolean
}
type PoorDevBike = {
    model: string,
    year: string
}
interface RichDevWatch {
    heartBeat: number;
    AI: boolean;
    timer: boolean;
    camera: boolean
}



const poorDeveloper: Developer<PoorDevWatch, PoorDevBike> = {
    name: 'Mr. Poor',
    salary: 10,
    device: {
        brand: 'lenovo',
        model: 'ideapad330',
        releasedYear: '2002'
    },
    smartWatch: {
        heartBeat: 120,
        steps: 220,
        AI: false
    },
    bike: {
        model: 'Gixer',
        year: '2000'
    }
}
const richDeveloper: Developer<RichDevWatch> = {
    name: 'Mr. Rich',
    salary: 10,
    device: {
        brand: 'lenovo',
        model: 'ideapad330',
        releasedYear: '2002'
    },
    smartWatch: {
        heartBeat: 60,
        AI: true,
        timer: true,
        camera: true
    },

}