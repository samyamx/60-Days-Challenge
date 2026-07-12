#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10, y = 20;

    printf("Before Swap: %d %d\n", x, y);

    swap(&x, &y);

    printf("After Swap: %d %d\n", x, y);

    return 0;
}