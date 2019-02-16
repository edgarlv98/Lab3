$.ajax({
    url : "data/grammys.json",
    type : "GET",
    dataType : "json",
    success: function(data){
        let new_html = "";

        for( let i=0; i<data.fields.length; i++){
            new_html += `
                <option value="
                    ${data.fields[i].field_id}">${data.fields[i].field}
                </option>
            `;
        }

        var id=0;

        $("#category_types").append(new_html);
        $("#category_types").on('change', function(event){
            $("#field").text($(this).children("option:selected").text());
            id=parseInt($("#category_types").val());
            $("#description").text(data.fields[id-1].description);
            console.log(id);
        });

        var id2=0;

        $("#category_types").on('change', function(event){
            let id3=parseInt($("#category_types").val());
            for(let i=0; i<data.fields[id3].categories.length; i++){
                $("#category").text(data.fields[id3-1].categories[i].category_name);
                $("#descCategory").text(data.fields[id3-1].categories[i].description);
                for(let j=0; j<data.fields[id3].categories[j].nominees.length; j++){
                    $("#descCategory").text(data.fields[id3-1].categories[i].nominees[j].nominee);
                }
            }
        });

/*
        for(let i=0; i<data.fields[id].categories.length; i++){
            console.log(data.fields[id].categories[i].category_name);
            console.log(data.fields[id].categories[i].description);
        }

        for(let j=0; j<data.fields[id].categories[id2].nominees.length; j++){
            console.log(data.fields[id].categories[id2].nominees[j].nominee);
            console.log(data.fields[id].categories[id2].nominees[j].artist);
            console.log(data.fields[id].categories[id2].nominees[j].info);
        }
*/
    },
    error: function(error_msg){
        console.log(error_msg);
    }
});