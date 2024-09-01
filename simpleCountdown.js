function simpleCountdown(hours, minutes, seconds, speed, callback) {
            let totalSeconds = hours * 3600 + minutes * 60 + seconds;
            const timerContainer = document.getElementById('timer');

            // Dynamically create timer elements
            const elements = [];
            if (hours > 0) {
                const hoursSpan = document.createElement('span');
                hoursSpan.id = 'hours';
                elements.push(hoursSpan, document.createTextNode(':'));
            }
            if (minutes > 0 || hours > 0) { // Show minutes if either minutes or hours are provided
                const minutesSpan = document.createElement('span');
                minutesSpan.id = 'minutes';
                elements.push(minutesSpan, document.createTextNode(':'));
            }
            if (seconds >= 0) {
                const secondsSpan = document.createElement('span');
                secondsSpan.id = 'seconds';
                elements.push(secondsSpan);
            }

            // Append the elements to the timer container
            timerContainer.append(...elements);

            const updateTimer = () => {
                const hrs = Math.floor(totalSeconds / 3600);
                const mins = Math.floor((totalSeconds % 3600) / 60);
                const secs = totalSeconds % 60;

                if (hours > 0) {
                    document.getElementById('hours').textContent = String(hrs).padStart(2, '0');
                }
                if (minutes > 0 || hours > 0) {
                    document.getElementById('minutes').textContent = String(mins).padStart(2, '0');
                }
                if (seconds >= 0) {
                    document.getElementById('seconds').textContent = String(secs).padStart(2, '0');
                }

                if (totalSeconds > 0) {
                    totalSeconds--;
                } else {
                    clearInterval(interval);
                    if (callback) {
                        callback(); // Trigger the callback when the countdown reaches zero
                    }
                }
            };

            updateTimer(); // Initial call to display the starting time
            const interval = setInterval(updateTimer, speed);
        }
