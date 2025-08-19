
        // function createSparkle() {
        //     const sparkles = document.getElementById('sparkles');
        //     const sparkle = document.createElement('div');
        //     sparkle.className = 'sparkle';
        //     sparkle.style.left = Math.random() * 100 + '%';
        //     sparkle.style.animationDelay = Math.random() * 3 + 's';
        //     sparkles.appendChild(sparkle);
            
        //     setTimeout(() => {
        //         sparkle.remove();
        //     }, 3000);
        // }
        
        // // Generate sparkles periodically
        // setInterval(createSparkle, 300);
        
        document.querySelector('.profile-card').addEventListener('mousemove', (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        document.querySelector('.profile-card').addEventListener('mouseleave', (e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });

        document.getElementById('entryOverlay').addEventListener('click', function() {
        this.style.display = 'none';
        
        });

            // Sound play
        function playAudio() {
            const audio = document.getElementById('bg-audio');
            audio.play().catch(e => {
                console.log("Playback prevented:", e);
            });


            window.removeEventListener('click', playAudio);
        }

        window.addEventListener('click', playAudio);

        document.addEventListener('contextmenu', e => e.preventDefault());

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j')) {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.key.toLowerCase() === 'u') {
                e.preventDefault();
                return false;
            }
        });




            const audio = document.getElementById('bg-audio');
            const volumeTrack = document.querySelector('.volume-slider-track');
            const volumeProgress = document.getElementById('volumeProgress');
            const volumeHandle = document.getElementById('volumeHandle');
            const volumePercent = document.getElementById('volumePercent');

        let isDragging = false;

        audio.volume = 1.0;

        function updateVolume(e) {
          const rect = volumeTrack.getBoundingClientRect();
          let percent = ((e.clientX - rect.left) / rect.width);
          percent = Math.min(1, Math.max(0, percent));
          
          volumeProgress.style.width = `${percent * 100}%`;
          volumeHandle.style.right = `${(1 - percent) * 100}%`;
          audio.volume = percent;
          volumePercent.textContent = `${Math.round(percent * 100)}%`;
        }


        volumeTrack.addEventListener('mousedown', (e) => {
          isDragging = true;
          updateVolume(e);
        });

        document.addEventListener('mousemove', (e) => {
          if (isDragging) updateVolume(e);
        });

        document.addEventListener('mouseup', () => {
          isDragging = false;
        });

        volumeTrack.addEventListener('click', updateVolume);
            
            document.addEventListener('mousedown', () => {
          document.body.style.userSelect = 'none';
        });

        document.addEventListener('mouseup', () => {
          document.body.style.userSelect = '';
        });


              document.querySelectorAll('img').forEach(img => {
              img.setAttribute('draggable', 'false');
            });
            
            document.querySelectorAll('a').forEach(link => {
          link.setAttribute('draggable', 'false');
        });


