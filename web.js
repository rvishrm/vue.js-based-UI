new Vue({
    el:"#one",
    data:{
       url:`background-image: url("./pics/wireless1.jpg")`,
        pictureNumber: 1,
        ended: false
    },
    methods: {
        changePicRight: function(){
            this.pictureNumber += 1;
            // console.log(this.pictureNumber);
            this.url = `background-image:url("/pics/wireless` + this.pictureNumber +`.jpg")`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        },
        changePicLeft: function(){
            this.pictureNumber -= 1;
            // console.log(this.pictureNumber);
            this.url = `background-image:url("/pics/wireless` + this.pictureNumber +`.jpg")`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        }
    }

});