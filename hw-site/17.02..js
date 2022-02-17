function filtriraj(obj, val)
{
    pom = []
    for(let i=0;i<obj.length;i++)
    {
        if(obj[i].age < val)
        {
            pom.push(obj[i])
        }
    }
    console.log(pom);
}
biblioteka = [
    {
        author : "knjiga1",
        title : "title1",
        age : 25,
    },
    {
        author : "knjiga2",
        title : "title1",
        age : 23,
    },
    {
        author : "knjiga3",
        title : "title1",
        age : 20,
    },
    {
        author : "knjiga4",
        title : "title1",
        age : 15,
    },
    {
        author : "knjiga5",
        title : "title1",
        age : 27,
    }
];
filtriraj(biblioteka, 23)