const app = new Vue({
    el: "#root",

    data: {
        photos: [
            "https://placebear.com/600/400.jpg",
            "https://placebear.com/900/600.jpg",
            "https://placebear.com/1200/800.jpg"
        ],

        photoIndex: 0,

        autoplay: ""
    },

    methods: {
        nextPhoto: function() {
            clearInterval(this.autoplay);

            if(this.photoIndex == this.photos.length - 1) {
                return this.photoIndex = 0;
            } else {
                return this.photoIndex++;
            }
        },

        prevPhoto: function() {
            clearInterval(this.autoplay);

            if(this.photoIndex == 0) {
                return this.photoIndex = this.photos.length - 1;
            } else {
                return this.photoIndex--;
            }
        },

        toSelectedPhoto: function(index) {
            clearInterval(this.autoplay);

            return this.photoIndex = index;
        }
    },

    mounted: function() {
        this.autoplay = setInterval(() => {
            if(this.photoIndex == this.photos.length - 1) {
                return this.photoIndex = 0;
            } else {
                return this.photoIndex++;
            }
        }, 3000);

        return this.autoplay;
    }
}); 