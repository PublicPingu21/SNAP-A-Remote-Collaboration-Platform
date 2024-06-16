 document.addEventListener('DOMContentLoaded', function () {
            setupFeatureChangeListener();
            window.addEventListener('pageshow', onPageShow);

            document.getElementById('btn').addEventListener('click', toggleLearnMoreContent);
        });

        function setupFeatureChangeListener() {
            document.getElementById('Features').addEventListener('change', handleFeatureChange);
        }

        function handleFeatureChange() {
            var selectedOption = this.value;

            switch (selectedOption) {
                case 'Calendar':
                    redirectToPage('features/Calendar.htm');
                    break;
                case 'Todo List':
                    redirectToPage('features/TodoList.htm');
                    break;
                case 'Reminder':
                    redirectToPage('features/Reminder.htm');
                    break;
                case 'Planning':
                    redirectToPage('features/Planning.htm');
                    break;
                case 'history': // Note: 'history' should be lowercase to match the option value
                    redirectToPage('history.htm');
                    break;
            }
        }

        function redirectToPage(pageURL) {
            console.log("Opening " + pageURL + "...");
            window.location.href = pageURL;
        }

        function onPageShow(event) {
            if (event.persisted) {
                setupFeatureChangeListener();
                resetDropdown();
            }
        }

        function resetDropdown() {
            document.getElementById('Features').selectedIndex = 0;
        }

        function toggleLearnMoreContent() {
            var learnMoreContent = document.getElementById('learn-more-content');
            if (learnMoreContent.style.display === 'none' || learnMoreContent.style.display === '') {
                learnMoreContent.style.display = 'block';
            } else {
                learnMoreContent.style.display = 'none';
            }
        }