// #include <stdio.h>

// int main()
// {
//     int a = 25;
//     int b = 40;

//     int *p1 = &a;
//     int *p2 = &b;

//     if (*p1 > *p2)
//         printf("Maximum = %d", *p1);
//     else
//         printf("Maximum = %d", *p2);

//     return 0;
// }


#include <stdio.h>

int main()
{
    int arr[] = {1,2,3,4,5};
    int *start = arr;
    int *end = arr + 4;

    while(start < end)
    {
        int temp = *start;
        *start = *end;
        *end = temp;

        start++;
        end--;
    }

    for(int i=0;i<5;i++)
        printf("%d ", arr[i]);

    return 0;
}