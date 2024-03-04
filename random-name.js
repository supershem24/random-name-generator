function getRandomItem(items){
    let num = Math.floor(Math.random() * items.length);
    if(items[num] != null){
        return items[num];
    }
    else{
        return "Error, No name could be goten";
    }
}