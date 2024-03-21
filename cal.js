function cal()
{
    var n1=document.getElementById("f1").value;
    var n2=document.getElementById("f1").value;
    var score_n1=0;
    var score_n2=0;
    var final_score=0;
    var n11=n1.split("");
    console.log(n11)
    var n12=n2.split("");
    for(i=0;i<n1.length;i++)
    {
        if(n11[i]=='a'||n11[i]=='e'||n11[i]=='i'||n11[i]=='o'||n11[i]=='u')
        {
            score_n1+=5;
        }
        if(n11[i]=='f'||n11[i]=='r'||n11[i]=='i'||n11[i]=='e'||n11[i]=='n'||n11[i]=='d')
        {
            score_n1+=10;
        }
    }
    for(j=0;j<n2.length;j++)
    {
        if(n12[j]=='a'||n12[j]=='e'||n12[j]=='i'||n12[j]=='o'||n12[j]=='u')
        {
            score_n2+=5;
        }
        if(n12[j]=='f'||n12[j]=='r'||n12[j]=='i'||n12[j]=='e'||n12[j]=='n'||n12[j]=='d')
        {
            score_n2+=10;
        }
    }
    final_score=score_n1+score_n2;
    if(final_score>=100)
    {
        alert("This friend is like one soul abiding in two bodies");
    }
    else if(final_score>=5 && final_score<=50)
    {
        alert("He/She is an temporary friend");
    }
    else if(final_score>50 && final_score<100)
    {
        alert("He/She not continue with you as long");
    }
    else if(final_score==0)
    {
        alert("Please enter a name")
    }
}