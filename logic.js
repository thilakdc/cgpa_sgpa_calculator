const body=document.querySelector(".bodyy");
const cgpa=document.querySelector(".button1");
const sgpa=document.querySelector(".button2");
let total_sub=0;
const conclude=(total_credits,total_grade_marks)=>{
    let final_total=Math.round((total_grade_marks/total_credits)*100)/100;
    let c_credit="";
    if(final_total>=9){
        c_credit="Are Outstanding";
    }else if(final_total>=8){
        c_credit="Are Excellent";
    }else if(final_total>=7){
        c_credit="Are very Good";
    }else if(final_total>=6){
        c_credit="Are Good";
    }else if(final_total>=5.5){
        c_credit="Are Average";
    }else if(final_total>=5){
        c_credit="Have Passed";
    }else{
        c_credit=" Have Failed";
    }
    document.querySelector(".button").innerHTML=`
    <div class="result">
        <div>Your sgpa is ${final_total} </div>
        <div>You ${c_credit}</div>
    </div>
    <div class="submit1">
        <button>RECHECK</button>
    </div>
</body>`;
document.querySelector(".submit1 button").addEventListener("click",()=>{
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
        <div class="if_wrong"><div></div></div>
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
        let mark=document.querySelector(".input12");
        let credit=document.querySelector(".input22");
        mark.focus();
        document.querySelector(".submit3 button").addEventListener("click",()=>{
        let marks=Number(mark.value);
        let credits=Number(credit.value);
        let grade_marks=  grade_point(marks);
        console.log("hi");
        document.querySelector(".if_wrong div").textContent="";
        if(grade_marks===0){
            document.querySelector(".if_wrong div").textContent="Invalid Marks";
            document.querySelector(".if_wrong").style.backgroundColor="blue";
            document.querySelector(".if_wrong").style.color="white";
            document.querySelector(".if_wrong").style.border="2px solid black";
            document.querySelector(".if_wrong").style.borderRadius="25px";
            mark.value="";
            credit.value="";
            mark.focus();
        }
        else{total_grade_marks=total_grade_marks+(grade_marks*credits);
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
const sgpa_cal=()=>{
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
    if(total_sub<=0){
        document.querySelector(".button").innerHTML=`
        <div class="mid1">
        <div class="wrong1">Enter Valid number of marks</div>
        <br>
        <div class="mid12">
        <label class="label1">Total Subjects :</label>
        <input class="input1" type="number" placeholder="Total no of Subject">
        </div>
    </div>
    <div class="submit4">
        <button>SUBMIT</button>
    </div>`;
        input.value="";
        input.focus();
        document.querySelector(".submit4 button").addEventListener("click",()=>{
        total_sub=Number(input.value);
        display(total_sub);
        });
    }
    else{
        display(total_sub);
        }
    });
}
sgpa.addEventListener("click",sgpa_cal);
const cgpa_conclude =(t_gpa,total_gpa)=>{
    let final_gpa =Math.round((t_gpa/total_gpa)*100)/100;
    let c_credit="";
    if(final_total>=9){
        c_credit="Are Outstanding";
    }else if(final_total>=8){
        c_credit="Are Excellent";
    }else if(final_total>=7){
        c_credit="Are very Good";
    }else if(final_total>=6){
        c_credit="Are Good";
    }else if(final_total>=5.5){
        c_credit="Are Average";
    }else if(final_total>=5){
        c_credit="Have Passed";
    }else{
        c_credit=" Have Failed";
    }
    document.querySelector(".button").innerHTML=`
    <div class="result">
        <div>Your sgpa is ${final_gpa} </div>
        <div>You ${c_credit}</div>
    </div>
    <div class="submit1">
        <button>RECHECK</button>
    </div>
</body>`;
document.querySelector(".submit1 button").addEventListener("click",()=>{
    total_sem();
});
}
const cgpa_page=(total_sem_c)=>{
    let t_gpa =0;
    let i=0;
    document.querySelector(".button").innerHTML=`
        <div class="all_input">
        <div class="if_wrong"></div>
        <div>
        <label class="label11">Marks :</label>
        <input class="input12" type="number" placeholder="Marks  Of Subject">
        </div>
        <br>
    <div class="submit6">
        <button>SUBMIT</button>
    </div>`;
        let gpa=document.querySelector(".input12");
        gpa.focus();
        document.querySelector(".submit6 button").addEventListener("click",()=>{
        let gpa_marks=Number(gpa.value);
        if(gpa_marks>10 || gpa_marks<0){
            document.querySelector(".if_wrong").textContent=`Enter Valid Sgpa`;
            gpa.value="";
            gpa.focus();
        }else{
        t_gpa = t_gpa+gpa_marks;
        i++;
        if(i==total_sem_c){
            cgpa_conclude(t_gpa,total_gpa);
        }else{
            gpa.value="";
            gpa.focus();
        }
    }
});
}
const total_sem=()=>{
    document.querySelector(".button").innerHTML=`
    <div class="mid">
    <div class="sem_wrong"></div>
    <div class="ppp">
        <label class="label1">Total Subjects :</label>
        <input class="input1" type="number" placeholder="Total Number Of Semisters">
    </div>
    </div>
    <div class="submit5">
        <button>SUBMIT</button>
    </div>`;
    let t_sem=document.querySelector(".input1");
    t_sem.focus();
    let total_sem_c=Number(t_sem.value);
    document.querySelector(".submit5 button").addEventListener("click",()=>{
        if(total_sem_c<=0 || total_sem_c>8){
            document.querySelector(".sem_wrong div").textContent=`Enter The Valid Numbers Of Sem`;
            t_sem="";
            t_sem.focus();
        }else{
        cgpa_page(total_sem_c);
        }
    });
}
cgpa.addEventListener("click",total_sem);
