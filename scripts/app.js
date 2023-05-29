    import Phaser from './phaser.min.js';

    import videoFile from '../media/video.mp4';
    import imageFile from '../media/demo.png';

    let base64ImageFile = imageFile;
    let base64VideoFile = videoFile;

    let config = {
        width: 600,
        height: 300,
        scene: { 
            preload: function(){
                this.textures.addBase64('demo', base64ImageFile);
                this.load.video('video', base64VideoFile);
            },
            create: function() { 
                this.add.text(10, 10, 'DEMO')
                    .setOrigin(0); 
                this.add.image(10, 30, 'demo')
                    .setScale(.25)
                    .setOrigin(0);
                this.add.video(300, 30, 'video')
                    .setScale(.5)
                    .setOrigin(0);
            } 
        }
    };

    new Phaser.Game(config);