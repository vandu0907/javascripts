function inner_para()
{
    return 'Hello World !!!';
}
function outer_para()
{
    console.log(inner_para());
}
outer_para(inner_para);