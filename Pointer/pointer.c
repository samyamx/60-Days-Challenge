#include <stdio.h>

int main()
{
    int a = 25;
    int b = 40;

    int *p1 = &a;
    int *p2 = &b;

    if (*p1 > *p2)
        printf("Maximum = %d", *p1);
    else
        printf("Maximum = %d", *p2);

    return 0;
}