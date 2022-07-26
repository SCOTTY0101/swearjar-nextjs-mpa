
function Magic() {
    const decision: string[] = [  
                        'Yes', 
                        'No', 
                        'Outlook not so certain',
                        'Maybe', 
                        'Not sure', 
                        'Ask again later', 
                        'Do not count on it',
                        'Possibly',
                        'Outlook looks good',
                        'Most likely',
                        'It will happen',
                        'Very doubtful'
                    ];
   let reply: string = decision[ Math.floor( Math.random() * 12 )];

    
    function updateButton() {
         const btn = document.querySelector('#magic');
        if (btn.textContent === 'Ask a question and click for an answer?') {
            return btn.textContent = reply;
        } else if ( btn.textContent === reply) {
            return btn.textContent = 'Ask a question and click for an answer?';
        } else {
            return btn.textContent = 'Ask a question and click for an answer?'
        }
    }
    updateButton();
}

export default Magic