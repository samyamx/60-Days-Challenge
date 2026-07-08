#include <stdio.h>

int main()
{
    int arr[5]={10,20,30,40,50};

    int search=90;
    int found=0;

    for(int i=0;i<5;i++)
    {
        if(arr[i]==search)
        {
            found=1;
            break;
        }
    }

    if(found)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}