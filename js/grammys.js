$.ajax({
	url : "data/grammys.json",
	type : "GET",
	dataType : "json",
	success: function(data){
		console.log(data.fields[0].field);
		let new_html = "";
		for(let i = 0; i < data.fields.length; i++){
			new_html += `
			<option value="${data.fields[i].field_id}">
			${data.fields[i].field}
			</option>
			`;
		}

		$("#category_types").append(new_html);
		$("#category_types").on('change', function(event){
            let id = $("#category_types").val();
            $("#nominees_List").empty();
			$("#field").text(data.fields[id-1].field);
            $("#description").text(data.fields[id-1].description);
		    Categories(data.fields[id-1].categories);
		});


	},
	error: function(error_msg){
		console.log(error_msg);
	}
});

function Categories(categories){
	let new_html = "";
	for (let i = 0; i < categories.length; i++){
		new_html+= `
		<h3>
		${categories[i].category_name}
		</h3>
		`;
		for(let j = 0; j < categories[i].nominees.length; j++){
                if(j === categories[i].winner_id)
                {
                new_html+=`<h4 class="winner">${categories[i].nominees[j].nominee}</h4><span>WINNER!</span>`
                new_html+=`<p> ${categories[i].nominees[j].artist} </p>`
                new_html+=`<p> ${categories[i].nominees[j].info} </p>`
                }
                else{
                new_html+=`<h4>${categories[i].nominees[j].nominee}</h4>`
                new_html+=`<p> ${categories[i].nominees[j].artist} </p>`
                new_html+=`<p> ${categories[i].nominees[j].info} </p>`
                }
		}

    }
	$("#nominees_List").append(new_html);
	
}