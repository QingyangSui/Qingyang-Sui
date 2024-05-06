getXml(fetch_id)
    .then(xml)
    .then(add_uuid =>{
        if(add_uuid) {
            return getXml(add_uuid)
                .then(xml)
        }
    })
.catch(error => {
    console.error("Another Problem:", error);
    display.innerHTML = 'Error!!'+ error.message;
});

document.addEventListener('DOMContentLoaded', function() {
    const fetch_id = document.body.getAttribute('data-uuid'); //Retrieves the uuid once the HTML has loaded completely.const ochre url='https://ochre.lib.uchicago.edu/ochre?uuid=';var display = document.getElementById('called-container'); //Stores the intended 'display’ element as a variable.var table = null; //This is a flag to prevent the duplication of inner display elements.
    const ochre_url = 'https://ochre.lib.uchicago.edu/ochre?uuid=';
    var display = document.getElementById('called-container');
    var table = null;

    
    function getXml(uuid) {
        return fetch(ochre_url + uuid, {redirect:'follow'})
        .then(output => {
            if(!output.ok) throw new Error(`Request Invalid ${error}`);
            return output.text();
        })
        .then(text_output => {
            const parser = new DOMParser();
            return parser.parseFromString(text_output,'text/xml');
        });
    }

    function xml(data) {
        const property = data.querySelectorAll('propery');
        let add_uuid = '';
        
    if(!table){ 
        table = document.createElement('table');
        table.setAttribute('class', 'table table-hover');
        tbody = document.createElement('tbody');
        table.appendchild(tbody);
        display.appendchild(table);
    }
        property.forEach(p =>{ 
        const string = p.querySelector('string');
        const value = p.querySelector('value');
    

            if(string && value){ 
                var row = document.createElement('tr');
                var strCell = document.createElement('td');
                var valCell = document.createElement('td');
                strCell.innerHTML =`<strong>${string.textContent}</strong>`;
                valCell.innerHTML =`<strong>${value.textContent}</strong>`;
                row.appendchild(strcell);
                row.appendChild(valCell);
                tbody.appendchild(row);

                if(string.textContent ='Associated text'){
                    const titleLocation = document.getElementById('api-fetch-title');
                    titleLocation,innerHTML =`<u><strong>~ ${value.textContent} ~</strong></u><br><br>`;
                    add_uuid = value.getAttribute('uuid');
                }
            }
        });
                
        display.appendchild(table);
        return add_uuid; 
    }

    if(sourceXML.getElementByTagName('resource')[0].getAttribute("format") == 'image/ipeg'){
        var img = document.createElement('img');
        var src = link + "&preview";
        img.src = src;
        document.getElementById('preview').appendChild(img);
    }    
};
    
  