#include <stdio.h>

int main()
{
    int arr[] = {1,1,2,2,3,4,4,5};
    int n = 8;

    int write = 0;

    for(int read = 1; read < n; read++)
    {
        if(arr[read] != arr[write])
        {
            write++;
            arr[write] = arr[read];
        }
    }

    printf("Unique elements:\n");

    for(int i = 0; i <= write; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}

