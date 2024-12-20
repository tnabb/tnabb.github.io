function pageLoad(){
    let data = itemDBData['Body'];
    let itemTypes = [];
    for(let i = 0; i < data.length; i++){
        let item = data[i];
        let itemDescription = item.identifiedDescriptionName.split("\n");

        for(let j = 0; j < itemDescription.length; j++){
            if(itemDescription[j].startsWith("Class:") && !itemTypes.includes(itemDescription[j].replace("Class: ", ""))){
                itemDescription[j] = itemDescription[j].replace("Class: ", "");
                itemTypes.push(itemDescription[j]);
            }
        }
    }

    itemTypes.sort();

    let itemTypeSelect = document.getElementById("typeDropForm");

    for(let i = 0; i < itemTypes.length; i++){
        let option = document.createElement("option");
        option.value = itemTypes[i];
        option.textContent = itemTypes[i];
        itemTypeSelect.appendChild(option);
    }

    searchItems();
}

function searchItems(){
    var search = document.getElementById("searchInputForm").value;
    let data = itemDBData['Body'];

    let itemsFound = [];
    if(search.match(/^[0-9]+$/)){
        itemsFound = [data.find(item => item.Id == search)];
    }else{
        itemsFound = data.filter(item => (item.identifiedDisplayName.toLowerCase().includes(search.toLowerCase()) || item.identifiedDescriptionName.toLowerCase().includes(search.toLowerCase())) && item.identifiedDescriptionName != "...");
    }

    let itemTableBody = document.getElementById("itemTableBody");

    while(itemTableBody.firstChild){
        itemTableBody.removeChild(itemTableBody.lastChild);
    }

    let itemCounter = 0;
    for(let i = 0; i < itemsFound.length; i++){
        let item = itemsFound[i];

        let itemRow = document.createElement("tr");
        itemRow.setAttribute("id", item.Id);
        let itemCell = document.createElement("td");
        itemCell.textContent = item.Id;
        itemCell.setAttribute("class", "text-center");
        itemRow.appendChild(itemCell);
        itemCell = document.createElement("td");
        
        if(item.slotCount > 0){
            itemCell.textContent = item.identifiedDisplayName + " [" + item.slotCount + "]";
        }else{
            itemCell.textContent = item.identifiedDisplayName;
        }
        
        itemRow.appendChild(itemCell);


        let itemDescription = item.identifiedDescriptionName.split("\n");

        let itemType = "";
        let itemWeight = "";
        
        for(let j = 0; j < itemDescription.length; j++){
            if(itemDescription[j].includes("Class:")){
                itemType = itemDescription[j].replace("Class: ", "");
            }else if(itemDescription[j].includes("Weight:")){
                itemWeight = itemDescription[j].replace("Weight: ", "");
            }
        }

        itemCell = document.createElement("td");
        itemCell.textContent = itemType;
        itemRow.appendChild(itemCell);
        itemCell = document.createElement("td");
        itemCell.textContent = itemWeight;
        itemRow.appendChild(itemCell);

        let dropDownSelect = document.getElementById("typeDropForm").value;
        if((dropDownSelect != "all" && dropDownSelect != itemType) || excludeItemList.includes(item.Id)){
            continue;
        }

        itemTableBody.appendChild(itemRow);
        itemCounter++;
    }

    document.getElementById("numberOfItems").textContent = "Number of items in table: " + itemCounter;
}

$(document).on('click', '#itemTableBody tr', function(){
    var id = $(this).attr('id');
    let item = getItemFromId(id);

    if($(this).next('tr').attr('id') || $(this).next('tr').length <= 0){
        let newRow = $("<tr>");
        newRow.append($("<td>"));
        newRow.append($("<td>").html(item.identifiedDescriptionName.replace(/\n/g, "<br>")).attr("colspan", "3"));

        $(this).after(newRow);
    }else{
        $(this).next('tr').remove();
    }
});

function getItemFromId(id){
    let data = itemDBData['Body'];
    let item = data.find(item => item.Id == id);
    return item;
}

let excludeItemList = [1282, 1382, 1826, 1827, 2002, 2445, 2446, 2772, 2773, 2774, 13417, 13418, 2395, 2396]