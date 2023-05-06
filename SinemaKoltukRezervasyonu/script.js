const container = document.querySelector('.container');
const count =document.getElementById('count');
const amount =document.getElementById('amount');
const select =document.getElementById('movie');
const seats =document.querySelectorAll('.seat:not(.reserved)'); 
getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal()
        
        
       

    }
});
select.addEventListener('change',function(e){
    calculateTotal();
});


function calculateTotal(){
    const selectedSeats =container.querySelectorAll('.seat.selected');
 
    const selectedSeatArr=[];
    const seatsArr =[];
    
    selectedSeats.forEach(function(seat) {
        selectedSeatArr.push(seat);
    });
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndex =selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    console.log(selectedSeatIndex);

    let selectedSeatCount =selectedSeats.length;
    count.innerText =selectedSeatCount;
    amount.innerText=selectedSeatCount * select.value;
    saveToLocalStorage(selectedSeatIndex);
}


function getFromLocalStorage(){
    const selectedSeats =JSON.parese(localStorage.getItem('selectedSeats'));

    if (selectedSeats !=null && selectedSeats.length >0 ){
        seats.forEach(function(seat,index) {
            if (selectedSeats.indexOf(index) >-1){
                seat.classList.add('selected');
            }
        });
    }
}
const selecttedMovieIndex=localStorage.getItem('selectedMovieIndex');
if(selecttedMovieIndex != null){
    select.selectedIndex =selecttedMovieIndex;
}


function saveToLocalStronge(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selecttedMovieIndex',select.selectedIndex);
}