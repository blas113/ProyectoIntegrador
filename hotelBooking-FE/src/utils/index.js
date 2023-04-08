const dayNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

export const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}

export const getSortedDays = (month, year) => dayNames;

const getPreviousDays = (month, year) => {
    const lastDay = daysInMonth(month, year);
    const numOfPastDays = new Date(year, month, 1).getDay();
    return Array.from({length: numOfPastDays}, (v, k) => {return {cat: "prev", value: lastDay - k, date: `${month}/${lastDay - k}/${year}`}}).reverse();
}

const getPosteriorDays =(month, year) => {
    const numOfPostDays = 6 - new Date(year, month, 0).getDay();

    return Array.from({length: numOfPostDays}, (v, k) => {return {cat: 'post', value: k + 1, date: `${month+1}/${k + 1}/${year}`}});
}

export const daysArrary = (month, year) => {
    return [...getPreviousDays(month, year) ,...Array.from({length: daysInMonth(month+1, year)}, (v, k) => {return {cat: "acc", value: k + 1, date: `${month+1}/${k + 1}/${year}`}}), ...getPosteriorDays(month + 1, year)]
}

export const validateDate = (dateStart, dateEnd) => {
    // console.log(dateStart, dateEnd);
    const dateStartSplit = dateStart.split('/')
    const dateEndSplit = dateEnd.split('/')

    const dateStartDate = new Date(dateStartSplit[2], dateStartSplit[0], dateStartSplit[1]);
    const dateEndDate = new Date(dateEndSplit[2], dateEndSplit[0], dateEndSplit[1]);

    if (dateEndDate.getTime() < dateStartDate.getTime()) return false;

    // console.table([dateStartDate.toLocaleDateString(), dateEndDate.toLocaleDateString(), dateEndDate.getTime() < dateStartDate.getTime()])

    return true;
    

}

const normalizeText = text => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

export const retrieveCities = (text, cities) => {
    if (text === "") return [];
    const reg = new RegExp(`${normalizeText(text)}`);

    return cities.filter(city => {
        // console.log(city, text, reg.test(city.name.toLowerCase()))
        return reg.test(normalizeText(city.nombre))
    });
}

export const url_base = "http://3.133.132.86:8080"