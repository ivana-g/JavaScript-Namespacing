$(document).ready(function(){
	
	/** Attaching Events **/
	var JQueryTesting = JQueryTesting || {};
	var o = JQueryTesting;
	
	o.findElementById = function(id) {
		return $("#" + id);
	};
	
	o.findElementByClassname = function(classname){
		return $("." + classname);	
	};
	
	o.objectExists = function(obj){
		if(obj.length)
			return true;
		else 
			return false;
	}
	
	o.findElementById("btnClick").click(function(){
		console.log("Find element by ID. Button clicked.");
	});
	
	o.findElementByClassname("int").click(function(){
		var thisObj = $(this); 
		var color = thisObj.css("color");
		if(color == "rgb(255, 0, 0)")
			$(this).css("color", "blue");
		else 
			$(this).css("color", "red");
	});
	
	/** DOM manipulation **/
	o.findElementById("dom").click(function(){
		var parent = $(".dom-manip"), 
			existingHtml = parent.html();
		$(".dom-manip")
			.html(existingHtml + '<div id="code-added" style="border: 1px solid red">Added with jquery</div>' );
		
		o.findElementById("chngText").click(changeText);
		o.findElementById("addCnt").click(addContent);
		o.findElementById("removeElm").click(removeElement);
	});
	
	function changeText() {
		var container = o.findElementById("code-added");
		if(container.length > 0){
			container.text("Text is changed through code.");
		} else {
			console.log("Container does not exist yet.")	
		};
	}
	
	o.findElementById("chngText").click(changeText);
	
	function addContent(){
		var container = o.findElementById("code-added");
		if(o.objectExists(container)){
			var p = document.createElement("p");
			p.innerHTML = "new P element";
			p.id = "para";
			p.style = "background-color: blue; color: yellow;";
			container.append(p);
		}
		else {
			console.log("Container element does not exist.")
		}
	};
	
	o.findElementById("addCnt").click(addContent);
	
	function removeElement(){
		var elm = o.findElementById("para");
		if(o.objectExists(elm)){
			elm.remove();
		}else {
			console.log("Element not found.")
		}
	};
	
	o.findElementById("removeElm").click(removeElement);
	
	/** AJAX = Asynchronous Javascript and XML **/
	
	o.findElementById("loadTxt").click(function(){
		var content = o.findElementById("textContent");
		content.load("text.txt", {name: "Ivana"}, 
			function(responseTxt, statusTxt, xhr){
				/*
				responseTxt = contains the resulting content if the request succeeds
				statusTxt = contains the status of the call
				xhr = contains the XMLHttpRequest object
				*/
				content.append("<br/> responseTxt: " + responseTxt + "; \n" + 
					"statusTxt: " + statusTxt + ";  \n" + 
					"xhr: " + xhr);
			});
	});
	
	
	o.findElementById("getTxt").click(function(){
		var content = o.findElementById("textContent");
		//$.get("testing_get.asp", - this won't work because there is no server
		// testing_json.js - does not work too
		$.get("testing.html", function(data, status){
			content.text("data: " + data + ";  " + "status: " + status);
		});
	});
	
	o.findElementById("postTxt").click(function(){
		var content = o.findElementById("textContent");
		//$.post("testing_post.asp", - this won't work because there is no server
		$.post("testing.html", {name: "Ronald Rustky", city: "New York"}, 
			function(data, status){
				content.text("data: " + data + "\n  " + "status: " + status);
			});
	});
	
	o.findElementById("ajaxTxt").click(function(){
		$.ajax({
			async: true, 
			url: "testing_xml.xml", 
			beforeSend: function(xhr){
				alert("BeforeSend: executed before the async HTTP request is sent");
			},
			cache: true, 
			complete: function(xhr, status){
				alert("Complete: xhr: " + xhr + "; status: " + status)
			}, 
			contentType: "xml", 
			context: o, 
			data: {name: "Ronald Rutsky", age: 30}, 
			error: function(xhr, status, error){
				alert("Error: " + error + "; status: " + status);
			}, 
			success: function(result, status, xhr){
				alert("Success! Result: " + result + "; status: " + status);
			}, 
			type: "POST"  //"GET"
		});
	});
});