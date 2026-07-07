#include <stdio.h>

int main()
{
    int a=10;
    int *p=&a;

    printf("%d\n",*p);

    *p=25;

    printf("%d\n",a);

    printf("%p\n",p);

    printf("%p\n",&a);

    return 0;
}