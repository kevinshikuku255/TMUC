/** Notification function */
export const Notify =  async ({message, title, image}) => {
    /** create and show the notification */
    if(message && title){
        const showNotification = () => {
        // create a new notification
        new Notification( title, {
            body: message,
            icon: './Images/favicon.png',
            vibrate: [100, 50, 100],
            image: image
        });
     }


        /** show an error message */
        const showError = () => {
            console.log("error")
        }

        // check notification permission
        let granted = false;

        if (Notification.permission === 'granted') {
            granted = true;
        } else if (Notification.permission !== 'denied') {
            let permission = await Notification.requestPermission();
            granted = permission === 'granted' ? true : false;
        }

        // show notification or error
        granted ? showNotification() : showError();

    }
}