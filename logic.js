const body=document.querySelector(".bodyy");
const cgpa=document.querySelector(".button1");
const sgpa=document.querySelector(".button2");
let total_sub=0;
const conclude=(total_credits,total_grade_marks)=>{
    let final_total=Math.round((total_grade_marks/total_credits)*100)/100;
    document.querySelector(".button").innerHTML=`
    <div class="result">
        <div>You Have Scored ${total_grade_marks}</div>
    </div>
    <div class="submit1">
        <button>RECHECK</button>
    </div>
</body>`;
}
const grade_point=(marks)=>{
    if(marks>100 || marks<0){
        document.querySelector(".button").innerHTML=`
    <div class="all_input">
        <div class="wrong">Enter Valid Marks</div> 
        <div>
        <label class="label11">Marks :</label>
        <input class="input12" type="number" placeholder="Marks  Of Subject">
        </div>
    </div>
    <div class="submit2">
        <button>SUBMIT</button>
    </div>`;
    let mark=document.querySelector(".input12");
    document.querySelector(".submit2 button").addEventListener("click",()=>{
        marks=Number(mark.value);
    });
    }
    if(marks <= 100 && marks>=90){
        return 10;
    }else if(marks>=70){
        return 8
    }else if(marks>=60){
        return 7
    }else if(marks>=50){
        return 6
    }else if(marks>=40){
        return 5
    }else if(marks>=30){
        return 4
    }else if(marks>=20){
        return 3
    }else if(marks>=10){
        return 2
    }else if(marks>=0){
        return 1
    }
}
const display=(total_sub)=>{
    let total_grade_marks=0;
    let total_credits=0;
    console.log(total_sub);
    let i=0;
    document.querySelector(".button").innerHTML=`
        <div class="all_input">
        <div>
        <label class="label11">Marks :</label>
        <input class="input12" type="number" placeholder="Marks  Of Subject">
        </div>
        <br>
        <div>
        <label class="label21">Credits :</label>
        <input class="input22" type="number" placeholder="Credits For Subject">
        </div>
        </div>
    <div class="submit3">
        <button>SUBMIT</button>
    </div>`;
    if(i===total_sub){
    conclude(total_credits,total_grade_marks);
    }else{
        let mark=document.querySelector(".input12");
        let credit=document.querySelector(".input22");
        console.log(i);
        document.querySelector(".submit3 button").addEventListener("click",()=>{
        let marks=Number(mark.value);
        let credits=Number(credit.value);
        let grade_marks=grade_point(marks);
        total_grade_marks=total_grade_marks+(grade_marks*credits);
        total_credits=total_credits+credits;
        mark.value="";
        credit.value="";
        mark.focus();
        i++;
        });
    }
}
sgpa_cal=()=>{
    document.querySelector(".button").innerHTML=`
    <div class="mid">
        <label class="label1">Total Subjects :</label>
        <input class="input1" type="number" placeholder="Total no of Subject">
    </div>
    <div class="submit4">
        <button>SUBMIT</button>
    </div>`;
    let input=document.querySelector(".input1");
    let submit4=document.querySelector(".submit4 button");
    submit4.addEventListener("click",()=>{
        total_sub=Number(input.value);
        display(total_sub);
    });
}
sgpa.addEventListener("click",sgpa_cal);
