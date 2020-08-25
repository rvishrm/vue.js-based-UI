new Vue({
    el:"#one",
    data:{
       url:``,
       xyy:0,
        pictureNumber: 1,
        ended: false,
        class:'border-green'
    },
    methods: {
        changePicRight: function(){
            this.pictureNumber += 1;
            // console.log(this.pictureNumber);
            this.xyy += 12.5;
            this.url = `transform: translateX(`+ -this.xyy+`%); transition:transform 1s ease-in-out`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        },
        changePicLeft: function(){
            this.pictureNumber -= 1;
            // console.log(this.pictureNumber);
            this.xyy -=12.5;
            this.url =`transform: translateX(`+ -this.xyy+`%); transition:transform 1s ease-in-out`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        },
        changeBackground=function(){
            
        }


    }

});