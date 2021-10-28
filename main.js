const link = {
    github : "marcussenise",
    youtube : "UC4-K5o9QskzkwDToZuDtbuA",
    instagram : "marcussenise",
    facebook : "marcus.senise",
    twitter : "isnotmyname",
 }
  
 function changeSocialMediaLinks(){
     for (let li of socialLinks.children){
         const social = li.getAttribute('class');
       
         li.children[0].href = `https://www.${social}.com/${link[social]}`
     }
 }


 changeSocialMediaLinks()

 function getGithubProfileInfos(){
     const url = `https://api.github.com/users/${link.github} `
     fetch(url)
     .then(response => response.json())
     .then(data => {
        userName.textContent = data.name
        bio.textContent = data.bio
        userLink.href = data.html_url
        userImg.src = data.avatar_url
        userLogin.textContent = data.login
     })
 }

 getGithubProfileInfos()