
 

new Vue({
    el:"#one",
    data:{
       url:``,
       backImgTag:``,
       xyy:0,
        pictureNumber: 1,
        ended: false,
        class:'border-green',
        count:0
    },
    methods: {
        changePicRight: function(){

            this.count++;
           
        //    console.log(this.$refs.one.style);
            // console.log(this.pictureNumber);
            this.xyy += 12.5;
            this.url = `transform: translateX(`+ -this.xyy+`%); transition:transform 0.5s ease-in-out;`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        },
        changePicLeft: function(){
            this.count--;
           
            // console.log(this.pictureNumber);
            this.xyy -=12.5;
            this.url =`transform: translateX(`+ -this.xyy+`%); transition:transform 0.5s ease-in-out;`;
            
            console.log(this.url);
            // console.log(typeof String(this.pictureNumber+1))
        },
       changeBackground(number){
            this.backImgTag = `background-image:url(./pics/` + number +`.png);`;
       }


    }

});