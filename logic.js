const body=document.querySelector(".bodyy");
const cgpa=document.querySelector(".button1");
const sgpa=document.querySelector(".button2");
let total_sub=0;
const conclude=(total_credits,total_grade_marks)=>{
    let final_total=Math.round((total_grade_marks/total_credits)*100)/100;
    let c_credit="";
    if(final_total>=9){
        c_credit="Outstanding Work!! Your Dedication and Consistency Are Clearly Paying Off.";
    }else if(final_total>=8){
        c_credit="Excellent Performance! You Have Build Strong Academic Foundation.";
    }else if(final_total>=7){
        c_credit="Very Good! You Have Done Well.focus on Preparation.";
    }else if(final_total>=6){
        c_credit="Good job! You have To focus On Your Weakness.";
    }else if(final_total>=5.5){
        c_credit="You Passed,Don't Stop Here And Focus More.";
    }else if(final_total>=5){
        c_credit="YOu Made It.Now Use This Result As A Motivation";
    }else{
        c_credit="Don't Give Up! One Result Does Not Define Your Ability.";
    }
    document.querySelector(".button").innerHTML=`
    <div class="result">
        <div>Your sgpa is ${final_total} </div>
        <div>${c_credit}</div>
    </div>
    <div class="submit1">
        <button class="border">RECHECK</button>
    </div>
</body>`;
document.querySelector(".submit1 button").addEventListener("click",(e)=>{
    e.preventDefault();
    sgpa_cal();
})
}
const grade_point= (marks)=>{
    if(marks> 100 || marks<0){
        return 0;
    }else if(marks>=90){
        return 10;
    }else if (marks>=80){
        return 9;
    }else if(marks>=70){
        return 8;
    }else if(marks>=60){
        return 7;
    }else if(marks>=50){
        return 6;
    }else if(marks>=40){
        return 5;
    }else if(marks>=30){
        return 4;
    }else if(marks>=20){
        return 3;
    }else if(marks>=10){
        return 2;
    }else if(marks>=0){
        return 1;
    }
}
const display=(total_sub)=>{
    let total_grade_marks=0;
    let total_credits=0;
    console.log(total_sub);
    let i=0;
    document.querySelector(".button").innerHTML=`
        <div class="all_input">
        <div class="if_wrongs"><div></div></div>
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
        <button class="border">SUBMIT</button>
    </div>`;
        let mark=document.querySelector(".input12");
        let credit=document.querySelector(".input22");
        mark.focus();
        document.querySelector(".submit3 button").addEventListener("click",()=>{
        let marks=Number(mark.value);
        let credits=Number(credit.value);
        let grade_marks=  grade_point(marks);
        document.querySelector(".if_wrongs div").textContent="";
        document.querySelector(".if_wrongs").style.border="0px";
        if(grade_marks===0){
            document.querySelector(".if_wrongs div").textContent="Invalid Marks";
            document.querySelector(".if_wrongs").style.backgroundColor="#e61515";
            document.querySelector(".if_wrongs").style.color="white";
            document.querySelector(".if_wrongs").style.border="5px solid black";
            document.querySelector(".if_wrongs").style.borderRadius="25px";
            mark.value="";
            credit.value="";
            mark.focus();
        }
        else{
        total_grade_marks=total_grade_marks+(grade_marks*credits);
        total_credits=total_credits+credits;
        i++;    
        if(i===total_sub){
            console.log(total_credits);
            console.log(total_grade_marks);
            conclude(total_credits,total_grade_marks);
        }else{
            mark.value="";
            credit.value="";
            mark.focus();
        }
    }
});
}
const wrong_total=()=>{
    document.querySelector(".button").innerHTML=`
        <div class="mid1">
        <div class="wrong1">Enter Valid number of Subjects</div>
        <br>
        <div class="mid12">
        <div class="mid13">
        <label class="label1">Total Subjects :</label>
        <input class="input1" type="number" placeholder="Total no of Subjects"></div>
        </div>
    </div>
    <div class="submit4">
        <button class="border">SUBMIT</button>
    </div>`;
        document.querySelector(".wrong1").style.backgroundColor="blue";
        document.querySelector(".wrong1").style.color="white";
        document.querySelector(".wrong1").style.border="3px solid black";
        document.querySelector(".wrong1").style.borderRadius="25px";
        let input=document.querySelector(".input1");
        input.value="";
        input.focus();
        document.querySelector(".submit4 button").addEventListener("click",(e)=>{
            e.preventDefault();
            total_sub=Number(input.value);
            if(total_sub<=0){
            wrong_total();
            }
            else{
            display(total_sub);
            }
        });
    }
const sgpa_cal=()=>{
    document.querySelector(".button").innerHTML=`
    <div class="mid">
        <label class="label1">Total Subjects :</label>
        <input class="input1" type="number" placeholder="Total no of Subjects">
    </div>
    <div class="submit4">
        <button class="border">SUBMIT</button>
    </div>`;
    let input=document.querySelector(".input1");
    let submit4=document.querySelector(".submit4 button");
    input.focus();
    submit4.addEventListener("click",(e)=>{
        e.preventDefault();
    total_sub=Number(input.value);
    if(total_sub<=0){
        wrong_total();
    }
    else{
        display(total_sub);
        }
    });
}
sgpa.addEventListener("click",sgpa_cal);
const cgpa_conclude =(t_gpa,total_sem_c)=>{
    let final_total =Math.round((t_gpa/total_sem_c)*100)/100;
    let c_credit="";
    if(final_total>=9){
        c_credit="Outstanding Work!! Your Dedication and Consistency Are Clearly Paying Off.";
    }else if(final_total>=8){
        c_credit="Excellent Performance! You Have Build Strong Academic Foundation.";
    }else if(final_total>=7){
        c_credit="Very Good! You Have Done Well.focus on Preparation.";
    }else if(final_total>=6){
        c_credit="Good job! You have To focus On Your Weakness.";
    }else if(final_total>=5.5){
        c_credit="You Passed,Don't Stop Here And Focus More.";
    }else if(final_total>=5){
        c_credit="YOu Made It.Now Use This Result As A Motivation";
    }else{
        c_credit="Don't Give Up! One Result Does Not Define Your Ability.";
    }
    document.querySelector(".button").innerHTML=`
    <div class="result">
        <div>Your Cgpa is ${final_total} </div>
        <div>${c_credit}</div>
    </div>
    <div class="submit1">
        <button class=border">RECHECK</button>
    </div>
</body>`;
document.querySelector(".submit1 button").addEventListener("click",(e)=>{
    e.preventDefault();
    total_sem();
});
}
const cgpa_page=(total_sem_c)=>{
    let t_gpa =0;
    let i=0;
    document.querySelector(".button").innerHTML=`
        <div class="all_input">
        <div class="if_wrongs1"><div></div></div>
        <div class="lab">
        <label class="label11">SGPA :</label>
        <input class="input12" type="number" placeholder="SGPA  Of A Semister">
        </div>
        </div>
        <br>
    <div class="submit6">
        <button class="border">SUBMIT</button>
    </div>`;
        let wrong=document.querySelector(".if_wrongs1 div");
        let gpa=document.querySelector(".input12");
        gpa.focus();
        wrong.textContent="";
        wrong.style.border="0px";
        document.querySelector(".submit6 button").addEventListener("click",(e)=>{
            e.preventDefault();
        let gpa_marks=Number(gpa.value);
        if(gpa_marks>10 || gpa_marks<0 || gpa_marks==" "){
            wrong.textContent=`Enter Valid SGPA`;
            wrong.style.borderRadius="25px";
            wrong.style.border="3px solid black";
            wrong.style.fontSize="45px";
            wrong.style.backgroundColor="rgb(114, 255, 19)"
            gpa.value="";
            gpa.focus();
        }else{
        t_gpa = t_gpa+gpa_marks;
        i++;
        if(i==total_sem_c){
            cgpa_conclude(t_gpa,total_sem_c);
        }else{
            gpa.value="";
            gpa.focus();
        }
    }
});
}
const total_sem=()=>{
    document.querySelector(".button").innerHTML=`
    <div class="mid5">
    <div class="sem_wrong"></div>
    <div class="ppp">
        <label class="label1"> Semisters :</label>
        <input class="input1" type="number" placeholder="Total Number Of Semisters">
    </div>
    </div>
    <div class="submit5">
        <button class="border">SUBMIT</button>
    </div>`;
    let t_sem=document.querySelector(".input1");
    t_sem.focus();
    document.querySelector(".submit5 button").addEventListener("click",(e)=>{
        e.preventDefault();
        let total_sem_c=Math.floor(Number(t_sem.value));
        if(total_sem_c<=0 || total_sem_c>8 || total_sem_c==" "){
            document.querySelector(".sem_wrong").textContent=`Enter The Valid Numbers Of Sem`;
            document.querySelector(".sem_wrong").style.borderRadius="25px";
            document.querySelector(".sem_wrong").style.border=" 3px solid black";
            t_sem.value="";
            t_sem.focus();
        }else{
        cgpa_page(total_sem_c);
        }
    });
}
cgpa.addEventListener("click",total_sem);
