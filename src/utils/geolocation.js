export const defaultCenter = {
    lat: 31.046051,
    lng: 34.851612
};

export const getBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const {latitude: lat, longitude: lng} = pos.coords;
                    resolve({lat,lng})
                }, () => {
                    reject(defaultCenter)
                },
            )
        } else {
            reject(defaultCenter)
        }
    })
}