const generateTrackingId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let trackingId = '';
    for (let i = 0; i < 10; i++) {
      trackingId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return trackingId;
  };