#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(){
    int number,guess , nguesses=1;
    srand(time(0));
    number = rand()%100 +1; //generates a random number between 1 to 100
    // printf("The number is %d",number);
    // keep running the loop until the number is guessed
    do{
        printf("guess the number between 1 to 100 \n ");
        scanf("%d",&guess);
        if (guess>number){
            printf("enter a smaller no.  ");
        }
        else if(guess<number){
            printf("enter a bigger number ");
        }
        else{
            printf("You guessed it in %d attempts",nguesses);
        }
        nguesses++;


    }while(guess!=number);

    
    return 0;
}