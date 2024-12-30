const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

const ctx = canvas.getContext("2d");
const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev() {
   
        if (document.getElementById("inDays").value.length == 0 || document.getElementById("inHour").value.length == 0) {
            alert("សូម​បញ្ចូលពត៌មានឱ្យ​បានគ្រប់!​");
            return false;
        }
        
	  ctx.font = "14px Krasar";
      var x = document.getElementById("form");
      x.style.display = "none";

      var xz = document.getElementById("show");
      xz.style.display = "block";

      let inName = document.getElementById("inName").value;
      let inSex = document.getElementById("inSex").value;
      let inPosition = document.getElementById("inPosition").value;
      let inDays = document.getElementById("inDays").value;
      let inDateF = document.getElementById("inDateF").value;
      let inMonthF = document.getElementById("inMonthF").value;
      let inYearF = document.getElementById("inYearF").value;
      let inDateT = document.getElementById("inDateT").value;
      let inMonthT = document.getElementById("inMonthT").value;
      let inYearT = document.getElementById("inYearT").value;
      let inDateI = document.getElementById("inDateI").value;
      let inMonthI = document.getElementById("inMonthI").value;
      let inYearI = document.getElementById("inYearI").value;
      let inReason = document.getElementById("inReason").value;
      let inTime = document.getElementById("inTime").value;
      let inShift = document.getElementById("inShift").value;
      let inHour = document.getElementById("inHour").value;
      let inPmAm = document.getElementById("inPmAm").value;

      const name = document.getElementById("name");
      const sex = document.getElementById("sex");
      const position = document.getElementById("position");
      const days = document.getElementById("days");
      const datef = document.getElementById("datef");
      const datet = document.getElementById("datet");
      const datei = document.getElementById("datei");
      const reason = document.getElementById("reason");
      const time = document.getElementById("time");
      const shift = document.getElementById("shift");
      const hour = document.getElementById("hour");
      const pmam = document.getElementById("pmam");

      name.innerHTML = inName;
      sex.innerHTML = inSex;
      position.innerHTML = inPosition;
      days.innerHTML =  inDays + " " + inTime;
      datef.innerHTML = inDateF + "." + inMonthF + "." + inYearF;
      datet.innerHTML = inDateT + "." + inMonthT + "." + inYearT;
      datei.innerHTML = inDateI + "." + inMonthI + "." + inYearI;
      reason.innerHTML = inReason;
      time.innerHTML = inTime;
      shift.innerHTML = inShift;
      hour.innerHTML = inHour + " " + inPmAm;
      pmam.innerHTML = inPmAm;
      
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 800, 900);
      ctx.fillStyle = "#0D55B5";
      ctx.fillRect(0, 0, 800, 100);
      // ctx.fillStyle = "#0D55B5";
      // ctx.fillRect(200, 555, 300, 2);
      ctx.drawImage(logo, 25, 15, 140, 70);
      ctx.fillStyle = "#000";
      ctx.font = '23pt Krasar'; 
      ctx.fillStyle = "#ffffff";
      ctx.fillText("ពាក្យស្នើសុំអនុញ្ញាតឈប់សម្រាក", 200, 68);


      ctx.font = '20pt Krasar'; 
      ctx.fillStyle = "#000";
      ctx.fillText("ខ្ញុំបាទ/នាងខ្ញុំ", 50, 150);
      ctx.fillStyle = "#0D55B5";
      ctx.textAlign = "center";
      ctx.fillText(name.innerHTML, 280, 150);
      ctx.fillStyle = "#000";
      ctx.textAlign = "start";
      ctx.fillText("សិក្សាវគ្គ", 380, 150);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(position.innerHTML, 480, 150);

      ctx.font = '20pt Krasar'; 
      ctx.fillStyle = "#000";
      ctx.fillText("វេន​សិក្សា", 50, 205);
      ctx.fillStyle = "#0D55B5";
      ctx.textAlign = "center";
      ctx.fillText(shift.innerHTML, 280, 205);

      ctx.fillStyle = "#000";
      ctx.textAlign = "start";
      ctx.fillText("ម៉ោង​សិក្សា", 380, 205);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(hour.innerHTML, 500, 205);


      ctx.fillStyle = "#000";
      ctx.fillText("សូមគោរពជូនលោកនាយកមជ្ឈមណ្ឌលខេមបូអាយធី", 110, 260);
      ctx.fillText("កម្មវត្ថុ", 50, 315);
      ctx.fillText("សុំច្បាប់ឈប់សម្រាកចំនួន", 200, 315);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(days.innerHTML, 470, 315);
      ctx.fillStyle = "#000";
      ctx.fillText("ចាប់ពីថ្ងៃទី", 50, 370);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(datef.innerHTML, 250, 370);
      ctx.fillStyle = "#000";
      ctx.fillText("ដល់ថ្ងៃទី", 50, 425);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(datet.innerHTML, 250, 425);
      ctx.fillStyle = "#000";
      ctx.fillText("ចូលរៀនវិញថ្ងៃទី", 50, 480);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(datei.innerHTML, 250, 480);
      ctx.fillStyle = "#000";
      ctx.fillText("មូលហេតុ", 50, 535);
      ctx.fillStyle = "#0D55B5";
      ctx.fillText(reason.innerHTML, 250, 535);
      ctx.fillStyle = "#000";
      ctx.fillText("សេចក្តីដូចបានជម្រាបខាងលើ", 200, 590);
      ctx.fillText("សូមលោកនាយកមេត្តាអនុញ្ញាតដោយក្តីអនុគ្រោះ", 100, 645);
      ctx.fillText("សូមលោកនាយកទទួលការគោរពដ៏ខ្ពង់ខ្ពស់អំពីខ្ញុំបាទ/នាងខ្ញុំ។", 50, 700); 
      
      var conSex = document.getElementById("inSex").value;
      
      var mF = "";
      if (conSex < 3) {      
        ctx.fillRect(122, 142, 60, 2);
        ctx.fillRect(582, 690, 60, 2);
        mF = "ខ្ញុំបាទ";
      } else {       
        ctx.fillRect(50, 142, 60, 2);
        ctx.fillRect(512, 690, 60, 2);
        mF = "នាង​ខ្ញុំ";
      }
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});

async function onShares() {

        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob(); 
        const filesArray = [
            new File(
                [blob],
                'Card.png',
                {
                    type: blob.type,
                    lastModified: new Date().getTime()
                }
            )
        ]; 

      //   var mFSex = document.getElementById("inSex").value;
     //    var inputName = document.getElementById("inName").value;
      //   var mF = "";
       //  if (mFSex < 3) {      
      //     mF = "ខ្ញុំបាទ";
       //  } else {       
       //    mF = "នាង​ខ្ញុំ";
       //  } 
           
        // const textShow = String(mF + ' ' + inputName + ' សុំអនុញ្ញាតច្បាប់ឈប់​សម្រាក់ដូចទម្រង់ខាងលើដោយក្តីអនុគ្រោះ');

    const shareData = {
        
         //text: textShow ,
            files: filesArray
        }; 
        navigator.share(shareData);
    }
