#include <stdio.h>

int main()
{
    int arr[5]={12,45,23,89,34};

    int *ptr=arr;
    int max=*ptr;

    for(int i=1;i<5;i++)
    {
        if(*(ptr+i)>max)
            max=*(ptr+i);
    }

    printf("Largest = %d",max);

    return 0;
}