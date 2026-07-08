#include <stdio.h>

int main()
{
    int arr[5]={2,3,8,5,10};

    int even=0;
    int odd=0;

    for(int i=0;i<5;i++)
    {
        if(arr[i]%2==0)
            even++;
        else
            odd++;
    }

    printf("Even=%d\n",even);
    printf("Odd=%d\n",odd);

    return 0;
}