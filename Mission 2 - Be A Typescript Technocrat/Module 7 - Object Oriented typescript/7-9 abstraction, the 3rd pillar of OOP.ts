//! Idea but not a clear real implementation
//! 1. Interface
//! 2. Abstract Class


//! 1. Interface
//* Idea
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}
//* Implementation
class VideoPlayer implements MediaPlayer { //! Have to implement from interface in this class
    play(): void {
        console.log('playing video')
    }
    pause(): void {
        console.log('Paused the video')
    }
    stop(): void {
        console.log('Stopped the video')
    }
}
const videoPlayerInstance = new VideoPlayer()
videoPlayerInstance.play()
videoPlayerInstance.pause()
videoPlayerInstance.stop()



//! 2. Abstract Class 
//* Idea
abstract class MediaPlayer2 {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}//! Cant create any instance from this abstract class!!

//* Implementation
class VideoPlayer2 extends MediaPlayer2{   //! Have to extend from abstract class
    play(): void {
        console.log('Playing video')
    }
    pause(): void {
        console.log('Paused the video')
    }
    stop(): void {
        console.log('Stopped the video')
    }
}
const videoPlayerInstance2 = new VideoPlayer2()
videoPlayerInstance2.play()
videoPlayerInstance2.pause()
videoPlayerInstance2.stop()
