const helper = ( () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    return {
        /**
         * 
         * @param {Array} array 
         * @returns Array
         */
        selector: (array) => {
            return array.map( ele => $(`#${ele}`) )
        },
        selectorAll: (array, option = "") => {
            option = option === "" ? option : `:${option}`
            return array.map( ele => $$(`#${ele+option}`) )
        },
        /**
         * 
         * @param {Array} timeTable 
         * @returns Array
         */
        convertTimeTable: (timeTable)=> {
            timeTable = timeTable.map(element => JSON.parse(`${element}`) );

            let listKey = timeTable.map( (ele)=> Object.keys(ele)[0]);
            listKey = [...new Set(listKey)];

            timeTable = listKey.map( key => {
                let time = timeTable
                    .filter( ele =>  Object.keys(ele)[0] === key )
                    .map( ele => Object.values(ele)[0])
                return{
                    date:  new Date(key).toJSON(),
                    time
                }
            });
    
            return timeTable;
        },
        /**
         * 
         * @param {Array} listNodeInput - Array ID of Input
         * @returns Object ERROR with key is ID
         * @example
         * checkValidFormData(["name", "age"]) // {"name": err, "age": err}
         */
        checkValidFormData: (listNodeInput, callback) => {
		    const ERROR = {};
            listNodeInput.forEach( ele => {
                if (ele.localName) {
                    if (ele.value.length === 0) {
                        ERROR[ele.id] = `${ele.dataset.error} không được để trống`;
                    }
                }
            })
    
            callback(ERROR)
        },
        isEmpty: (param) => {
            switch (JSON.stringify(param)) {
                case "[]":
                case "{}":
                    return true;
                default:
                    return false;
            }
        }
    }
})()

export default helper