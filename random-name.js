function getRandomItem(items = ["Dave"]){
    let item = Math.floor(Math.random() * items.length);
    if(item != null){
        return item;
    }
    else{
        return "Error, No name could be goten";
    }
}